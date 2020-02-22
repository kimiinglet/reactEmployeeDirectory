import React from 'react';
import MaterialTable from 'material-table';

export default function Table() {
    const [state, setState] = React.useState({
    columns: [
        { title: 'Id', field: 'id', type: 'numeric' },
        { title: 'First Name', field: 'firstName' },
        { title: 'Last Name', field: 'lastName' },
        { title: 'Role', field: 'role' },
        { title: 'Salary', field: 'salary', type: 'numeric'},
    ],
    data: [
        {
            firstName: 'Jason',
            lastName: 'Jeans',
            id: '50',
            role: 'CEO',
            salary: '160,000'
        },
        {
            name: 'Zerya Betül',
            id: '50',
            role: 'CEO',
            salary: '160,000'
        },
        {
            name: 'Zerya Betül',
            id: '50',
            role: 'CEO',
            salary: '160,000'
        },
        {
            name: 'Zerya Betül',
            id: '50',
            role: 'CEO',
            salary: '160,000'
        },
        {
            name: 'Zerya Betül',
            id: '50',
            role: 'CEO',
            salary: '160,000'
        },
        {
            name: 'Zerya Betül',
            id: '50',
            role: 'CEO',
            salary: '160,000'
        },
        {
            name: 'Zerya Betül',
            id: '50',
            role: 'CEO',
            salary: '160,000'
        },
        {
            name: 'Zerya Betül',
            id: '50',
            role: 'CEO',
            salary: '160,000'
        },
        {
            name: 'Zerya Betül',
            id: '50',
            role: 'CEO',
            salary: '160,000'
        },
        {
            name: 'Zerya Betül',
            id: '50',
            role: 'CEO',
            salary: '160,000'
        },
        {
            name: 'Zerya Betül',
            id: '50',
            role: 'CEO',
            salary: '160,000'
        },
        {
            name: 'Zerya Betül',
            id: '50',
            role: 'CEO',
            salary: '160,000'
        },

    ],
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
