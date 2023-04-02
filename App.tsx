import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  Pressable,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import UserCard from './src/components/UserCard';

const URL = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState([]);

  async function FetchData() {
    const response = await axios.get(URL);
    setLoading(false);
    setUserList(response.data);
  }

  function renderUser(props: any) {
    return (
      <UserCard
        name={props.item.name}
        username={props.item.username}
        email={props.item.email}
      />
    );
  }

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList data={userList} renderItem={renderUser} />
      )}
    </SafeAreaView>
  );
}

export default App;
