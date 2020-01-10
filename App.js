/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

// import AuthScreen from './AuthScreen';
import AppNavigator from './src';

const App = () => {
  return (
    <AppNavigator />
    // <>
    //   <StatusBar barStyle="dark-content" />
    //   <SafeAreaView>
    //     <ScrollView
    //       contentInsetAdjustmentBehavior="automatic"
    //       style={styles.scrollView}>
    //       <Header />
    //       {global.HermesInternal == null ? null : (
    //         <View style={styles.engine}>
    //           <Text style={styles.footer}>Engine: Hermes</Text>
    //         </View>
    //       )}
    //       <View style={styles.body}>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>All is yours</Text>
    //           <Text style={styles.sectionDescription}>
    //             Project is set up now
    //           </Text>
    //           <Text style={styles.sectionDescription}>
    //             Toggle Auth!
    //           </Text>
    //         </View>
    //       </View>
    //       <AuthScreen/>
    //     </ScrollView>
    //   </SafeAreaView>
    // </>
  );
};

export default App;
