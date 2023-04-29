// ** React Imports
import { useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** Mui Imports
import { Grid, Typography, Button, Chip, Paper } from '@mui/material'

interface GuestDetailPageViewProps {
  title: string
  tag: string[]
  text: string
  img: string
  id: number
  tabId: string
}

const GuestDetailPageView = ({
  title,
  tag,
  text,
  img,
  id,
  tabId,
}: GuestDetailPageViewProps) => {
  const [hide, setHide] = useState<boolean>(true)

  const handleShow = () => setHide(false)
  const handleHide = () => setHide(true)

  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={10} sx={{ mt: 3 }}>
        <Grid container>
          <Grid item xs={2}>
            <Link href={`/folder/${tabId}/list`}>
              <img src="/back.png" />
            </Link>
          </Grid>
          <Grid item xs={8} sx={{ textAlign: 'center' }}>
            <Typography>{title}</Typography>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center', ml: 2, my: 5 }}>
            <Paper
              sx={{
                boxShadow: 'none',
                border: 1,
                borderRadius: 2,
                width: 300,
                height: 300,
                textAlign: 'center',
                backgroundColor: '#f2f2f2',
              }}
            >
              <img src={img} width="100%" />
            </Paper>
          </Grid>
          {tag.map((item: string, index: number) => (
            <Grid item xs={4} key={index}>
              <Chip label={item} />
            </Grid>
          ))}
          {text.length > 30 ? (
            <>
              <Grid item xs={12} sx={{ mt: 5, my: 2 }}>
                {hide ? (
                  <Typography>{text.slice(0, 30)}...</Typography>
                ) : (
                  <Typography sx={{ width: 30 }}>{text}</Typography>
                )}
              </Grid>
              {hide ? (
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <Button sx={{ p: 0 }}>
                    <img src="/down.png" onClick={handleShow} />
                  </Button>
                </Grid>
              ) : (
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <Button sx={{ p: 0 }}>
                    <img src="/top.png" onClick={handleHide} />
                  </Button>
                </Grid>
              )}
            </>
          ) : (
            <Grid item xs={12} sx={{ my: 5 }}>
              <Typography>{text}</Typography>
            </Grid>
          )}
          <Grid item xs={12} sx={{ mt: 18 }}>
            <Link href="/">
              <Button
                variant="contained"
                sx={{ backgroundColor: '#272A33', p: 1.5 }}
                fullWidth
                size="large"
              >
                내 앨범 만들러 가기
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  )
}

export default GuestDetailPageView