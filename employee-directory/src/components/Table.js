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
            id: '1',
            role: 'CEO',
            salary: '800,000'
        },
        {
            firstName: 'Anna',
            lastName: 'Coffee',
            id: '2',
            role: 'CFO',
            salary: '800,000'
        },
        {
            firstName: 'Crystal',
            lastName: 'Ly',
            id: '20',
            role: 'Consultant',
            salary: '154,000'
        },
        {
            firstName: 'Brianna',
            lastName: 'McCray',
            id: '30',
            role: 'HR',
            salary: '130,000'
        },
        {
            firstName: 'Leo',
            lastName: 'Lopez',
            id: '62',
            role: 'Sales',
            salary: '180,000'
        },
        {
            firstName: 'Dan',
            lastName: 'Fenichel',
            id: '77',
            role: 'Finance',
            salary: '210,000'
        },
        {
            firstName: 'Brittney',
            lastName: 'Goudeau',
            id: '32',
            role: 'HR',
            salary: '130,000'
        },
        {
            firstName: 'Tera',
            lastName: 'Kelly',
            id: '61',
            role: 'Sales',
            salary: '210,000'
        },
        {
            firstName: 'Maggie',
            lastName: 'Keifer',
            id: '41',
            role: 'Sales',
            salary: '170,000'
        },
        {
            firstName: 'Piper',
            lastName: 'Louise',
            id: '19',
            role: 'Manager',
            salary: '190,000'
        },
        {
            firstName: 'Andrew',
            lastName: 'Jinx',
            id: '18',
            role: 'Manager',
            salary: '190,000'
        },
        {
            firstName: 'Pearson',
            lastName: 'Plans',
            id: '43',
            role: 'Intern',
            salary: '80,000'
        },
        {
            firstName: 'Penelope',
            lastName: 'Gray',
            id: '46',
            role: 'Intern',
            salary: '80,000'
        },
        {
            firstName: 'Tiffany',
            lastName: 'Books',
            id: '48',
            role: 'Intern',
            salary: '80,000'
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
