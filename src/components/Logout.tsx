import { queryClient, routePaths } from '@/configs'
import { logoutApi } from '@/services'
import { Avatar, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material'
import { SignOut } from 'phosphor-react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

interface Props {
  name: string
}

const Logout: React.FC<Props> = (props): JSX.Element => {
  const navigate = useNavigate()

  const [isMenu, setIsMenu] = useState<null | HTMLElement>(null)

  const logout = async () => {
    const result = await queryClient.fetchQuery(['logout'], {
      queryFn: logoutApi,
    })
    if (result.status === 'success') {
      toast.success(result.message) // Display success toast
      navigate('/' + routePaths.auth.root + '/' + routePaths.auth.login) // Redirect to login page
    }
  }

  return (
    <>
      <Avatar onClick={(event) => setIsMenu(event.currentTarget)}>{props.name.substring(0, 1).toUpperCase()}</Avatar>

      <Menu
        anchorEl={isMenu}
        open={Boolean(isMenu)}
        onClose={() => setIsMenu(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <SignOut fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </>
  )
}

export default Logout
