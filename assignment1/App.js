import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Modal, View} from 'react-native'; 
import Start from './Screens/Start';  
import Game from './Screens/Game'; 
import Final from './Screens/Final'; 
import colors from './components/colors';
import React, { useState } from 'react';  
import { LinearGradient } from 'expo-linear-gradient';

export default function App() { 
  const [isStartVisible, setisStartVisible] = useState(true);  
  const [isGameVisible, setIsGameVisible] = useState(false);   
  const [isFinalVisible, setIsFinalVisible] = useState(false);  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');  
  const [isChecked, setIsChecked] = useState(false);
  const [attempts, setAttempts] = useState(3);  
  const [answer, setAnswer] = useState(Math.floor(Math.random() * 10) + 1020);
  
  const gotoGame = () => { 
    setisStartVisible(false);  
    setIsGameVisible(true); 
  } 
  
  const gotoStart = () => {  
    setIsGameVisible(false); 
    setisStartVisible(true); 
    setIsChecked(false); 
    console.log(answer);
  }  

  const finishGame = () => {  
    setIsGameVisible(false); 
    setIsFinalVisible(true);
  }  

  const resetGame = () => {  
    setIsFinalVisible(false); 
    setisStartVisible(true);
    setAttempts(3); 
    setName(''); 
    setNumber(''); 
    setIsChecked(false); 
    setAnswer(Math.floor(Math.random() * 10) + 1020);
  }

  const handleAttempts = () => { 
    setAttempts(attempts - 1);
  }
  return ( 
    <LinearGradient colors={[colors.back1,colors.back2,colors.back3]}
    style={styles.background} >
        <SafeAreaView style={styles.container}> 
        <StatusBar style="auto" />    
          <Modal visible={isStartVisible} transparent={true}>
              <Start  
                dismissModal={gotoGame} 
                name={name}
                setName={setName}
                number={number}
                setNumber={setNumber} 
                handleAttempts={handleAttempts}  
                isChecked={isChecked}
                setIsChecked={setIsChecked} 
              />  
            </Modal>  
          <Modal visible={isGameVisible} transparent={true}>
            <Game  
              dismissModal={gotoStart}  
              name={name} 
              number={number}  
              attempts={attempts} 
              finalModal={finishGame} 
              answer={answer}
            />  
          </Modal> 
          <Modal visible={isFinalVisible} transparent={true}>
            <Final 
              resetGame={resetGame}  
              number={number} 
              answer={answer}
            /> 
          </Modal>
        </SafeAreaView> 
    </LinearGradient> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center', 
  },  
  modal: { 
    flex: 1, 
    backgroundColor:'transparent'
  }, 
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
  },
});
