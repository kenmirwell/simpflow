export const getColumns = (params) => {
    return {
        icon: {
            key: "icon",
            header: "Icon",
            Component: (props) => {
                return (
                   <p>{props.icon}</p>
                )
            }
        },
        category: {
            key: "category",
            header: "Category",
            Component: (props) => {
                return (
                    <p>{props.category}</p>
                 )
            }
        },
        group: {
            key: "Group",
            header: "Group",
            Component: (props) => {
                return (
                    <p>{props.group}</p>
                 )
            }
        },
        budget: {
            key: "Budget",
            header: "Budget",
            Component: (props) => {
                return (
                    <p>--</p>
                 )
            }
        },
        // hidden: {
        //     key: "hidden",
        //     header: "--",
        //     Component: (props) => {
        //         return (
        //             <p>--</p>
        //          )
        //     }
        // }
    }
}