import { Box, IconButton, InputAdornment, TextField } from '@mui/material'
import { PaperPlaneTilt } from 'phosphor-react'
import { useForm } from 'react-hook-form'

import type { IChatForm } from '@/types'

interface Props {
  createHandler: (data: IChatForm) => void
}

const ChatFrom: React.FC<Props> = (props): JSX.Element => {
  // ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄ / Form hook / ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
  const { handleSubmit, register, reset } = useForm<IChatForm>({
    defaultValues: { content: '' },
  })

  const onSubmit = (data: IChatForm) => {
    props.createHandler(data)
    reset()
  }
  // ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃ / Form hook / ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃

  return (
    <Box p={2} >
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          autoComplete="off"
          placeholder="Write a message..."
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment
                sx={{
                  paddingInline: 1,
                }}
                position="end"
              >
                <IconButton type="submit" edge="end">
                  <PaperPlaneTilt />
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...register('content')}
        />
      </form>
    </Box>
  )
}

export default ChatFrom
