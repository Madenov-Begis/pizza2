import React, { useCallback, useRef, useState } from 'react'
import styles from './Search.module.scss'
import searchi from '../../assets/img/bx-search.svg'
import searchx from '../../assets/img/bx-x.svg'
import { useDispatch } from 'react-redux'
import { setSearchValue } from '../../redux/Slices/searchSlice'
import debounce from 'lodash.debounce'

function Search() {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  const dispatch = useDispatch()

  const changeInput = (e) => {
    setValue(e.target.value)
    testDebounce(e.target.value)
  }

  const testDebounce = useCallback(
    debounce((value) => dispatch(setSearchValue(value)), 500),
    []
  )

  const clearInput = () => {
    setValue('')
    dispatch(setSearchValue(''))
    inputRef.current.focus()
  }

  return (
    <div className={styles.search}>
      <img src={searchi} alt="" className={styles.icons} />
      <input
        ref={inputRef}
        onChange={changeInput}
        type="text"
        placeholder="Поиск пиццы..."
        value={value}
      />
      {value && (
        <img
          src={searchx}
          alt=""
          className={styles.iconx}
          onClick={clearInput}
        />
      )}
    </div>
  )
}

export default Search
