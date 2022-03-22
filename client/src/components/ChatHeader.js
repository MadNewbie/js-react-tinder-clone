import { useCookies } from "react-cookie";

const ChatHeader = ({user}) => {
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const logout = () => {
        removeCookie('UserId', cookies.UserId)
        removeCookie('AuthToken', cookies.AuthToken)
        window.location.reload()
    }

    return (
        <div className="chat-container-header">
            <div className="profile">
                <div className="img-container">
                    <img src={user.url} alt="user photo profile"/>
                </div>
                <h3 className>{user.first_name}</h3>
            </div>
            <i className="log-out-icon" onClick={logout}>&#8592;</i>
        </div>
    )
}

export default ChatHeader