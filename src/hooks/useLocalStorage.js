import React from 'react'

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const storedItem = localStorage.getItem(itemName)
                const parsedItem = storedItem ? JSON.parse(storedItem) : initialValue
                
                setItem(parsedItem)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(false)
                console.error(error)
            }
        }, 1000)
    }, [])
    
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    }
    
    return {
        item,
        saveItem,
        loading,
        error
    }
}

export { useLocalStorage }
