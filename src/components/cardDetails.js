import React from 'react'
import {  Card, CardActionArea, CardContent, CardMedia,  Typography } from '@mui/material'

function CardDetails(props) {
    const handleOpenModal = props.handleOpenModal
    const imageLocation = props.imageLocation
    const title = props.title
    const description = props.description

    return(
        <Card >
            <CardActionArea onClick={handleOpenModal}>
                <CardMedia
                component="img"
                height="140"
                image={imageLocation}
                alt="viking"
                />
                <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CardDetails