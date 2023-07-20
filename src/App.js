
import './App.css';
import { useEffect } from 'react';
import {getCourses} from './Api/Api'
import {MainPage} from './Pages/MainPage'

import {useState} from  'react'

export const App = () => {

  // получение дат
  let day = new Date().toLocaleString()
  let yesterday =  new Date(Date.now()-86400000).toLocaleString()

  // флаг для дроп меню
  const [isVisible, setIsVisible] = useState(false)
  // создание массива чтоб в дальнейшем разместить туда обьект полученый с апи
  const [massiv, setMassiv] = useState([])
  // флаг загрузки
  const [isLoading, setIsloading] = useState(false)
  // выбранный элемент из списка
  const [selected, setSelected] = useState(null)

  // получение данных с сервера
useEffect(  () => {
  createMassiv()
}, [])

  // получаем данные с сервера и добавляем их в массив
const createMassiv = async( ) => {
  // делаем запрос (папка апи)
  let a = await getCourses()
  // в данный массив поместим нужную информацию из полученной с сервера
  let values = []
  // заполняем первый массив нужной информацией
  for (let key in a) {
    values.push([a[key].ID, a[key].Name, a[key].CharCode, a[key].Value, a[key].Previous])
  }

  // заполняем массив и ставим флаг окончания загрузки
  setMassiv(values)
  setIsloading(true)
}


// функция для показывания и скрывания меню + обнуление выбранной валюты
const visible = () => {
  setIsVisible(!isVisible)
  setSelected(null)
}
  return (
    <div>
    <MainPage day={day} yesterday={yesterday} isVisible={isVisible}
     isLoading={isLoading} massiv={massiv} selected={selected} setSelected={setSelected} visible={visible} />
     </div>
    )
}


