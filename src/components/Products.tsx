import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, AppRootState } from "../redux-toolkit/store"
import { useEffect } from "react"
import { fetchProducts } from "../redux-toolkit/feature/product/ProductSlice"

function Products() {
    const dispatch = useDispatch<AppDispatch>()
    const category = useSelector((state: AppRootState) => state.products.value)
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
  return (
    <div>
      <h1>Categories</h1>
      <div className="grid grid-cols-3">
        {
            category.map((item) => {
                return <div key={item.id}>
                    <img src={item.image} alt="" />
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                </div>
            })
        }
      </div>
    </div>
  )
}

export default Products
