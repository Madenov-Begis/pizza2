import React, { useCallback, useContext, useRef } from 'react'
import styles from './Search.module.scss'
import searchi from '../../assets/img/bx-search.svg'
import searchx from '../../assets/img/bx-x.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue } from '../../redux/Slices/searchSlice'
import debounce from 'lodash.debounce'


function Search() {
  const inputRef = useRef(null)
  const dispatch = useDispatch()
  const searchValue = useSelector(state => state.search.searchValue)


  const testDebounce = useCallback(
    debounce(changeInput, 1000), [])



  const changeInput = (e) => {
    dispatch(setSearchValue(e.target.value))
  }

  const clearInput = () => {
    dispatch(setSearchValue(''))
    inputRef.current.focus()
  }

  return (
    <div className={styles.search}>
      <img src={searchi} alt="" className={styles.icons} />
      <input
        ref={inputRef}
        onChange={testDebounce}
        type="text"
        placeholder="Поиск пиццы..."
        value={searchValue}
      />
      <img src={searchx} alt="" className={styles.iconx} onClick={clearInput} />
    </div>
  )
}

export default Search
