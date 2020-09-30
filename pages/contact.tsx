import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Footer from '../components/footer'
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'

interface inputType {
  value?: string
}

export default function Contact() {
  async function sendEmail(e: any) {
    e.preventDefault();

    const name: (inputType | any) = document.getElementById('name');
    const email: (inputType | any) = document.getElementById('email');
    const subject: (inputType | any) = document.getElementById('subject');
    const message: (inputType | any) = document.getElementById('message');

    if (name.value !== '' && email.value !== '' && subject.value !== '' && message.value !== '') {
      const { data: isWorth }: any = await axios({
        url: '/api/send',
        method: 'POST',
        data: {
          name: name.value,
          email: email.value,
          subject: subject.value,
          message: message.value
        }
      });

      if (isWorth.message.accepted) {
        alert('Thanks. I will reply soon');
        window.location.replace("/");
      } else {
        alert('Vishhhh. Try later!! ');
        window.location.replace("/");
      }
    } else {
      alert('Please. fill in all fields!!!');
    }
  }

  return (
    <>
      <Layout />
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h2 style={{ textAlign: 'center' }}>SEND ME AN EMAIL</h2>
      <div style={{ width: '100%', height: '500px', display: 'flex', justifyContent: 'center' }}>
        <form onSubmit={sendEmail} style={{ width: '30%', display: 'flex', flexDirection: 'column' }} noValidate autoComplete="off" >
          <TextField id="name" label="Name" />
          <TextField id="email" label="Email" />
          <TextField id="subject" label="Subject" />
          <TextField
            id="message"
            label="Message"
            placeholder="..."
            multiline
            variant="filled"
          />
          <Button
            variant="contained"
            color="default"
            style={{ marginTop: 20, margin: 'auto', fontWeight: 'bold' }}
            type='submit'
          >   Submit</Button>
        </form>
      </div>
      <Footer />
    </>
  );
}
