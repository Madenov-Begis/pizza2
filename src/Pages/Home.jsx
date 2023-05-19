import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaCard from '../components/PizzaCard'
import Pagination from '../components/Pagination'
import MyLoader from '../components/Skeleton/Skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveCat, setActiveSort, setPageCount } from '../redux/Slices/filterSlice'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { activeCat, activeSort, pageCount } = useSelector((state) => state.filter)
  const searchValue = useSelector((state) => state.search.searchValue)

  const [pizza, setPizza] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const skeleton = [...new Array(3)].map((item, index) => (
    <MyLoader key={index} />
  ))
  const pizzaItem = pizza.map((item) => <PizzaCard {...item} key={item.id} />)

  const category = activeCat > 0 ? `category=${activeCat}` : ''
  const search = searchValue ? `&search=${searchValue}` : ''
  async function getPizza() {

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
    const url = `?${category}&sortBy=${activeSort.sortID}&page=${pageCount}` 
    navigate(url)
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
          onClickSort={(index) => dispatch(setActiveSort(index))}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : pizzaItem}</div>
      <Pagination setCurrentPage={(page) => dispatch(setPageCount(page))} />
    </>
  )
}

export default Home
