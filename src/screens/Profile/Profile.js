import React, { useState } from 'react';
import Accordion from 'react-native-collapsible-accordion';
import styles from './Style';
import AntDesign from "react-native-vector-icons/AntDesign"
import {
  Text,
  View,
} from 'react-native';
import ConstantHeader from '../../Commons/Header/ConstantHeader';
import { ScrollView } from 'react-native-gesture-handler';
const Help = () => {
  const [showMoreInfo1, setShowMoreInfo1] = useState(false);
  const [showMoreInfo2, setShowMoreInfo2] = useState(false);
  const [showMoreInfo3, setShowMoreInfo3] = useState(false);
  const [showMoreInfo4, setShowMoreInfo4] = useState(false);
  const [showMoreInfo5, setShowMoreInfo5] = useState(false);
  const [showMoreInfo6, setShowMoreInfo6] = useState(false);
  return (
    <View>
      <ScrollView>
      <View style={styles.container}>
      <ConstantHeader/>
        <View style={styles.alignCenter}>
          <Text style={styles.headingTop}>Help</Text>
        </View>
      </View>
      
      <View style={styles.divBar}>
        <Accordion
          onChangeVisibility={(value) => {
            setShowMoreInfo1(value)
          }}
          renderHeader={() => (
            <View style={!showMoreInfo1 ? styles.physical:styles.physicalSelected}>
              <Text style={styles.text}>How To Login?
              </Text>
              <AntDesign
                style={styles.dropIcon}
                name={!showMoreInfo1 ? 'down' : 'up'}
              />
            </View>
          )}
          renderContent={() => (
            <View style={styles.background}>
              <Text style={styles.margin}>
                1. Visit www.jodibanomatrimony.com
              </Text>
              <Text style={styles.margin}>
                2. Enter The Registration e-mail ID And Password
              </Text>
              <Text style={styles.margin}>
                3.Click on the 'SIGN-IN' option on the homepage                        </Text>
            </View>
          )}
        />
        <Accordion
          onChangeVisibility={(value) => {
            setShowMoreInfo2(value)
          }}
          renderHeader={() => (
            <View style={!showMoreInfo2 ? styles.physical:styles.physicalSelected}>
              <Text style={styles.text}> Forgot Password
              </Text>
              <AntDesign
                style={styles.dropIcon}
                name={!showMoreInfo2 ? 'down' : 'up'}
              />
            </View>
          )}
          renderContent={() => (
            <View style={styles.background}>
              <Text style={styles.margin}>
                1.   Go to the "login" section of the account
              </Text>
              <Text style={styles.margin}>
                2.Enter The Registration e-mail ID And Password  Enter your username or email ID. You will then be prompted to enter your password.
              </Text>
              <Text style={styles.margin}>
                3.  Click "forgot your password" below the login tab. ...
              </Text>
            </View>
          )}
        />
        <Accordion
          onChangeVisibility={(value) => {
            setShowMoreInfo3(value)
          }}
          renderHeader={() => (
            <View style={!showMoreInfo3 ? styles.physical:styles.physicalSelected}>
              <Text style={styles.text}>How To Edit Profile
              </Text>
              <AntDesign
                style={styles.dropIcon}
                name={!showMoreInfo3 ? 'down' : 'up'}
              />
            </View>
          )}
          renderContent={() => (
            <View style={styles.background}>
              <Text style={styles.margin}>
                1.   Click on the "Home" Tab available at the bottom-left corner of the Shaadi screen
              </Text>
              <Text style={styles.margin}>
                2.Then click on the "Edit profile" option available next to your profile ID.
              </Text>
              <Text style={styles.margin}>
                3. You get an option to edit your profile details category-wise (Basic Info, About Myself section, Religious Background, etc..)
              </Text>
            </View>
          )}
        />
        <Accordion
          onChangeVisibility={(value) => {
            setShowMoreInfo4(value)
          }}
          renderHeader={() => (
            <View style={!showMoreInfo4 ? styles.physical:styles.physicalSelected}>
              <Text style={styles.text}>How To Search Profile
              </Text>
              <AntDesign
                style={styles.dropIcon}
                name={!showMoreInfo4 ? 'down' : 'up'}
              />
            </View>
          )}
          renderContent={() => (
            <View style={styles.background}>
              <Text style={styles.margin}>
                1.  Login to your profile with your registered e-mail ID and Password
              </Text>
              <Text style={styles.margin}>
                2.After logging-in please select the "Search" option from the top navigation menu
              </Text>
              <Text style={styles.margin}>
                3.After logging-in please select the "Search" option from the top navigation menu
              </Text>
              <Text style={styles.margin}>
                4.After logging-in please select the "Search" option from the top navigation menu
              </Text>
              <Text style={styles.margin}>
                5.Profiles that match the search criteria will be displayed
              </Text>
            </View>
          )}
        />
        <Accordion
          onChangeVisibility={(value) => {
            setShowMoreInfo5(value)
          }}
          renderHeader={() => (
            <View style={!showMoreInfo5 ? styles.physical:styles.physicalSelected}>
              <Text style={styles.text}>How To Send Message?
              </Text>
              <AntDesign
                style={styles.dropIcon}
                name={!showMoreInfo5 ? 'down' : 'up'}
              />
            </View>
          )}
          renderContent={() => (
            <View style={styles.background}>
              <Text style={styles.margin}>
                1.    Profiles that match the search criteria will be displayed
              </Text>
              <Text style={styles.margin}>
                2. Once you login to your profile, please select the profile you wish to contact from the Search results or from the Dashboard
              </Text>
              <Text style={styles.margin}>
                3.Click the "Send Message" option and select the message you wish to send
              </Text>
            </View>
          )}
        />
        <Accordion
          onChangeVisibility={(value) => {
            setShowMoreInfo6(value)
          }}
          renderHeader={() => (
            <View style={!showMoreInfo6 ? styles.physical:styles.physicalSelected}>
              <Text style={styles.text}>How To Replay Message?
              </Text>
              <AntDesign
                style={styles.dropIcon}
                name={!showMoreInfo6 ? 'down' : 'up'}
              />
            </View>
          )}
          renderContent={() => (
            <View style={styles.background}>
              <Text style={styles.margin}>
                1. Click the "Send Message" option and select the message you wish to send

              </Text>
              <Text style={styles.margin}>
                2.     Once you login to your profile, please select the "Inbox" option from the left navigation menu
              </Text>
              <Text style={styles.margin}>
                3.   Unread messages will be displayed; if you wish to reply to a message that has already been read, change the status from "Unread" to "Read" to display the message
              </Text>
            </View>
          )}
        />
      </View>
      </ScrollView>
    </View>
  )
};
export default Help;