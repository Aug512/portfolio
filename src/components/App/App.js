import React, {useEffect, useState} from 'react'
import firebase from 'firebase'
import 'firebase/database'
import About from '../About/About'
import ProjectsList from '../ProjectsList/ProjectList'
import '../../styles.scss'
import flagRU from '../../img/russia.png'
import flagUS from '../../img/united-states.png'

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyBWFUCG7J-YEoIryfl491wmCOH5lgyoQuQ",
    authDomain: "portfolio-bd8ab.firebaseapp.com",
    databaseURL: "https://portfolio-bd8ab-default-rtdb.europe-west1.firebasedatabase.app",
    dataectId: "portfolio-bd8ab",
    storageBucket: "portfolio-bd8ab.appspot.com",
    messagingSenderId: "131794100373",
    appId: "1:131794100373:web:7dbe660f62dce12948bb9c"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }

  const DB = firebase.database()

  const [dbData, setDBdata] = useState([])
  const [loader, setLoaderVisibility] = useState(true)
  const [lang, setLang] = useState('RU')

  useEffect( () => {
    const NO_DATA = 'No data from server'
    const dataRef = DB.ref(`/${lang}`);
    dataRef.on('value', (snapshot) => {
      const data = snapshot.val() ?? NO_DATA;
      if (data !== NO_DATA) {
        setDBdata(data)
        setLoaderVisibility(false)
      }
    });
  }, [DB, lang])

  const toggleLang = () => {
    lang === 'RU' ? setLang('EN') : setLang('RU')
  }

  return (
    <div className="App">
      <button
        className='langButton'
        onClick={toggleLang}
      >
        {lang === 'RU'
          ? <><span>Switch to </span><img src={flagUS} alt='EN' className='langButton__icon' /></>
          : <><span>Перейти на </span><img src={flagRU} alt='RU' className='langButton__icon' /></>
        }
      </button>
      {loader
        ? <p>Loading...</p>
        : <>
          <About userData={dbData.user} lang={lang}/>
          <ProjectsList projects={dbData.projects} lang={lang} />
        </>}
    </div>
  );
}

export default App
