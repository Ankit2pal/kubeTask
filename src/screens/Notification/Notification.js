import React, { useState } from 'react';
import styles from './Styles';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
import { useDispatch } from 'react-redux';
import { EvilIcons } from '@expo/vector-icons';
import { useEffect } from 'react';
import ConstantHeader from '../../Commons/Header/ConstantHeader';
import { notificationRequest } from '../../redux/modules/getNotificationSlice';

const Notification = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(notificationRequest({ UserId: 'abe309fa-a615-4562-b023-06e7ca8a5520' }));
    // notificationRequest(getNotificationApi('abe309fa-a615-4562-b023-06e7ca8a5520'));
  }, []);
  const arr = [{ 'title': "Hi welcome to jodi banao", "content": '' },
  { 'title': "This is the title ", "content": 'This is the body' },
  { 'title': "", "content": 'This is just the body without title' },
  { 'title': "Test title ", "content": 'Body Test Body' },
  { 'title': "", "content": 'Just the body' }];
  const [selected, setSelected] = useState();
  return (
    <View style={styles.div}>
      <ConstantHeader />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.alignCenter}>
            <Text style={styles.headingTop}>Notification
              <TouchableOpacity >
                <View style={styles.evil} onPress={''}>
                  <EvilIcons name={'navicon'} size={32} color={'black'} />
                </View>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
        {/* <SideDrawer /> */}
        <View style={styles.container}>
          {arr.map(function (arr, i) {
            return (
              <TouchableOpacity key={i} style={selected == arr.content ? styles.selectedBar : styles.bar} onPress={() => setSelected(arr.content)}>
                <AntIcon
                  style={selected == arr.content ? styles.selectedicon : styles.icon}
                  name={'exclamationcircleo'}
                  color={'#101010'}
                  size={16}
                />
                {arr.title != "" ? <Text style={selected == arr.content ? styles.selectedtitle : styles.title}>
                  {arr.title}</Text> : <></>}
                {arr.content != "" ? <Text style={selected == arr.content ? styles.selectedcontext : styles.context}>
                  {arr.content}</Text> : <></>}
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    </View>

  );
};
export default Notification;