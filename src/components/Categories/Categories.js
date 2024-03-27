import React from "react";
import List from "components/Categories/Categories/List"
import { categoryData } from "./Categories/RowData"

const Categories = (props) => {
    const [categoryItems, setCategoryItems] = React.useState({
        cashflow: "expense",
        items: categoryData.filter(i => i.cashflow === "expense")
    })

    const handleCashFlow = (data) => {
        setCategoryItems({
            cashflow: data,
            items: categoryData.filter(i => i.cashflow === data)
        })
    }

    return (
        <>
            <div className="categories container">
                <div className="header">
                    <h5>Categories</h5>
                </div>
                <div className="categories-content">
                    <div className="add-categories">
                        <h6>Add Category</h6>
                    </div>
                    <div className="category-types">
                        <button onClick={() => handleCashFlow("income")} className={categoryItems.cashflow="income" && "active"}>Income</button>
                        <button onClick={() => handleCashFlow("expense")} className={categoryItems.cashflow="expense" && "active"}>Expense</button>
                    </div>
                    <div className="categories-table">
                        <List 
                            categoryData={categoryItems.items}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories;