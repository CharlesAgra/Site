import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'name', headerName: 'Title', width: 300 },
  { field: 'language', headerName: 'Language', width: 130 },
  { field: 'created_at', headerName: 'Created at', width: 200 },
  { field: 'size', headerName: 'Size(mb)', width: 130 },
];

export default function Table(props) {
  return (
	<>
		<div style={{ height: '100vh', width: '100%'}}>
			<div style={{ height: '80%', width: '60%', margin: 'auto'}}>
				<DataGrid rows={props.data} columns={columns} pageSize={5} />
			</div>
		</div>
	</>  
  );
}
