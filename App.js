import {StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import * as actions from './src/store/actions/index';
import { connect } from 'react-redux';
import Card from './src/components/Card/Card';


const App = (props) => {
  const scrollRef = useRef();
  const [loading, setloading] = useState(false);
  const [data, setData] = useState([]);
  const [active, setActive] = useState(0)

  const alertHandler = (name, mail, index) => {
    setActive(index)
        Alert.alert(
          name.title + " "  + name.first + " " + name.last,
          mail      
            [            
              { text: "OK"}
            ]
          );  
}
 
  
  useEffect(() => {
    const unsSubscribe = props.onFetchItems('20');
    return () => {
unsSubscribe
    }
}, []);

const renderItem = (item, index) => {
   return  <Card press={alertHandler} active={index === active ? true : false} index={index} data={item} />
};

const handleRefresh = () => {
  setloading(true);
  props.onResetUsers();
  props.onFetchItems('20');
  setloading(false);
}

const handleLoadMore = () => {
  props.onFetchItems(20);
}



  return (
    <View style={styles.container}>
         <FlatList
          ref={scrollRef}
         // ListHeaderComponent={HeaderGelecekAlan}

          numColumns={1}
          style={{flex: 1}}
          extraData={loading}
          contentContainerStyle={{width: '100%', alignItems: 'center'}} 
        //  columnWrapperStyle={{justifyContent: 'center', marginBottom: 10}}
          data={props.users}
          keyExtractor={item => item.key}
          renderItem={({ item, index }) => renderItem(item, index)}
          refreshing={loading}
          onRefresh={handleRefresh}
          onEndReached={handleLoadMore}
        // onScrollEndDrag={handleLoadMore}
          onEndReachedThreshold={0.1}
        />
    </View>
  )
}

const mapStateToProps = state => {
  return {    
    users: state.userReducer.users,
    loading: state.userReducer.loading,
    error: state.userReducer.error
  
     }
 };
 const mapDispatchToProps = dispatch => {
  return {   
   onFetchItems: (userNumbers) => dispatch( actions.fetchItems(userNumbers)),
   onResetUsers: () => dispatch( actions.resetUsers()),


    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flex: 1,
    alignItems: 'center'
  }
})