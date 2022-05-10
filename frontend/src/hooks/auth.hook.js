import {useCallback, useEffect, useState} from "react";

const storageName = 'userData'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [accountType, setAccountType] = useState(null)

    const login = useCallback((jwtToken, id, type) => {
        console.log("accountType", type)
        setToken(jwtToken)
        setUserId(id)
        setAccountType(type)

        localStorage.setItem(storageName, JSON.stringify({
            token: jwtToken,
            userId: id,
            accountType: type
        }))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        setAccountType(null)
        localStorage.removeItem(storageName)
    }, [login])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            login(data.token, data.userId, data.accountType)
        }
    })

    return { login, logout, token, userId, accountType}
}