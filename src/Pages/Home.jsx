import React, { useEffect, useRef, useState } from 'react'
import Categories from '../components/Categories'
import Sort, { items as sortList } from '../components/Sort'
import PizzaCard from '../components/PizzaCard'
import Pagination from '../components/Pagination'
import MyLoader from '../components/Skeleton/Skeleton'
import { useDispatch, useSelector } from 'react-redux'
import {
  setActiveCat,
  setActiveSort,
  setFilters,
  setPageCount,
} from '../redux/Slices/filterSlice'
import { useNavigate } from 'react-router-dom'
import qs from 'qs'

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isSearch = useRef(false)
  const { activeCat, pageCount, activeSort } = useSelector(
    (state) => state.filter
  )
  const searchValue = useSelector((state) => state.search.searchValue)

  const [pizza, setPizza] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const skeleton = [...new Array(3)].map((item, index) => (
    <MyLoader key={index} />
  ))
  const pizzaItem = pizza.map((item) => <PizzaCard {...item} key={item.id} />)

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))
      const activeSort = sortList.find((obj) => obj.sortID === params.sortID)
      dispatch(
        setFilters({
          ...params,
          activeSort,
        })
      )
    }
  }, [])

  async function getPizza() {
    const category = activeCat > 0 ? `category=${activeCat}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    await fetch(
      `https://645cdff7250a246ae310e149.mockapi.io/pizzas?${category}&sortBy=${activeSort.sortID}${search}&page=${pageCount}&limit=3`
    )
      .then((res) => res.json())
      .then((data) => {
        setPizza(data)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getPizza()
  }, [activeCat, activeSort, searchValue, pageCount])

  useEffect(() => {
    if (isSearch.current) {
      const queryString = qs.stringify({
        activeCat,
        sortID: activeSort.sortID,
        pageCount,
      })
      navigate(`?${queryString}`)
    }

    isSearch.current = true
  }, [activeCat, activeSort, pageCount])

  return (
    <>
      <div className="content__top">
        <Categories
          activeCat={activeCat}
          onClickCAt={(index) => dispatch(setActiveCat(index))}
        />
        <Sort
          activeSort={activeSort}
          onClickSort={(index) => {
            dispatch(setActiveSort(index))
          }}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : pizzaItem}</div>
      <Pagination setCurrentPage={(page) => dispatch(setPageCount(page))} />
    </>
  )
}

export default Home
