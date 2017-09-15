import React from 'react';
import Box from '../../components/Box';
import DataTable from '../../components/DataTable';

const Users = () => {
  const exampleData = {
    titles: ['ID', 'Name', 'Address', 'Country', 'E-mail', 'Order ID'],
    data: [
      [1, 'Charles Johnson', 'Mackenzie 14', 'United States', 'a@jognson.com', 143563],
      [2, 'Carrie Johnson', 'Mackenzie 25', 'United States', 'carrie@johnson.com', 53969],
      [3, 'Margaret Johnson', 'Low Reed 152', 'Canada', 'spam@gmail.com', 95935],
      [4, 'Mark Johnson', 'Popocatepetel', 'Costa Rica', 'costa@rica.com', 14141]
    ]
  };

  return (
    <div>
      <Box>
        <DataTable caption="Males" data={exampleData} />

        <DataTable caption="Females" data={exampleData} />

        <hr />
        <h2>Team diversity</h2>


        <blockquote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna.
            Cras in mi at felis aliquet congue. Ut a est eget
             ligula molestie gravida. Curabitur massa. Donec eleifend, libero at
            sagittis mollis, tellus est malesuada tellus, at luctus
             turpis elit sit amet quam. Vivamus pretium ornare est.
          </p>
        </blockquote>

        <h3>Important, right?!</h3>

        <ul>
           <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
           <li>Aliquam tincidunt mauris eu risus.</li>
        </ul>
      </Box>
    </div>
  );
};

export default Users;
