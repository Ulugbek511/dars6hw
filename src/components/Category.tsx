import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, AppRootState } from "../redux-toolkit/store"
import { useEffect } from "react"
import { fetchCategory } from "../redux-toolkit/feature/category/CategorySlice"

function Category() {
    const dispatch = useDispatch<AppDispatch>()
    const category = useSelector((state: AppRootState) => state.category.value)
    useEffect(() => {
        dispatch(fetchCategory())
    }, [dispatch])
  return (
    <div>
      <h1>Categories</h1>
      <div className="grid grid-cols-3">
        {
            category.map((item) => {
                return <div key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                </div>
            })
        }
      </div>
    </div>
  )
}

export default Category
