import React ,{createContext,useEffect,useState}from "react";
import "./product.css";
const productPic = {
  height: "100%",
  width: "100%",
};
// create context
 export const ProductContext = createContext()
 const ProductProvider = ({children}) => {
  //product state
  const[Products,setproducts] = useState([])
  //fetch products
  useEffect(()=>{
    console.log("im in useefect")
    const fetchProducts = async ()=>{
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setproducts(data)
      console.log(data)
    }
    fetchProducts()
  },[])
  return (
    <div>
      <ProductContext.Provider value={{Products}}>{children}</ProductContext.Provider>
    </div>
    
  
  );
};



export default  ProductProvider;
