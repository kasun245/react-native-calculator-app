import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

const CustomButton = ({ title, onPress, style }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const[display, setDisplay] = useState();

  const calPress = (value)=>{
    
    if(value === '='){
      calResult();
    }else if(value === 'CE'){
      clearDisplay()
    }else if(value === '<-'){
      deleteLastCharacter();
    }else if(value === '-'){
      subTraction();
    }
    else{
      setDisplay(display + value);
      // setDisplay((prevDisplay) => prevDisplay + value);
    };
  }

  const calResult=() =>{
    try{
      const expression = display.replace(/x/g, '*');
      const result = eval(expression)
      console.log('Evaluating expression:', expression);
      setDisplay(result.toString())
      console.log(eval);
      

    }catch(error){
      setDisplay('error')
    }
    
  };

  const clearDisplay = () =>{
    setDisplay('');
  };

  const deleteLastCharacter = () =>{
    setDisplay(display.slice(0, -1));

  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.display}>{display}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <CustomButton title='%' onPress={()=> calPress('%')} style={styles.clearButton}/>
          <CustomButton title='CE' onPress={()=> calPress('CE')} style={styles.clearButton}/>
          <CustomButton title='<-' onPress={()=> calPress('<-')} style={styles.clearButton}/>
          <CustomButton title='-' onPress={()=> calPress('-')} style={styles.punctionButton}/>
        </View>

        <View style={styles.row}>
          <CustomButton title='7' onPress={()=> calPress('7')}/>
          <CustomButton title='8' onPress={()=> calPress('8')}/>
          <CustomButton title='9' onPress={()=> calPress('9')}/>
          <CustomButton title='x' onPress={()=> calPress('x')} style={styles.punctionButton}/>
        </View>

        <View style={styles.row}>
          <CustomButton title='4' onPress={()=> calPress('4')}/>
          <CustomButton title='5' onPress={()=> calPress('5')}/>
          <CustomButton title='6' onPress={()=> calPress('6')}/>
          <CustomButton title='/' onPress={()=> calPress('/')} style={styles.punctionButton}/>
        </View>

        <View style={styles.row}>
          <CustomButton title='1' onPress={()=> calPress('1')}/>
          <CustomButton title='2' onPress={()=> calPress('2')}/>
          <CustomButton title='3' onPress={()=> calPress('3')}/>
          <CustomButton title='+' onPress={()=> calPress('+')} style={styles.punctionButton}/>
        </View>

        <View style={styles.row}>
          <CustomButton title='000' onPress={()=> calPress('000')}/>
          <CustomButton title='0' onPress={()=> calPress('0')}/>
          <CustomButton title='.' onPress={()=> calPress('.')}/>
          <CustomButton title='=' onPress={()=> calPress('=')} style={styles.equalsButton}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#beafa7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    height: '50%',
    justifyContent: 'end',
    backgroundColor: "#beafa7",
  },
  button: {
    backgroundColor: '#000066',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    margin: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
  },
  display: {
    width: '90%',
    height: 150,
    backgroundColor: '#222',
    color: '#fff',
    fontSize: 30,
    textAlign: 'right',
    padding: 10,
    marginBottom: 20,
    borderRadius: 2,
  },
  equalsButton: {
    backgroundColor: '#28a745', 
  },
  punctionButton: {
    backgroundColor: '#ffad33',
  },
  clearButton: {
    backgroundColor: '#85adad',
  },
});

export default App;
