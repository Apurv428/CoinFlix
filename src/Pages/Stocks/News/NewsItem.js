import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    btn: {
        background: 'linear-gradient(#a1c4fd, #c2e9fb)',
        color: 'black' + '!important',
        '&:hover': {
            backgroundColor: '#673ab7' + '!important',
            color: 'blue' + '!important'
        }
    }
})

const NewsItem = (props) => {
    const classes = useStyles();
    let { title, description, imageUrl, newsUrl, author, date,time } = props;
    return (
            <Typography paragraph>
                <div className="my-3">
                    <div className="card"
                        style={{
                            backgroundImage: "linear-gradient(#ad5389,#3c1053)",
                            color: '#ffffff',
                        }}
                    >
                        <img src={!imageUrl ? "https://videohive.img.customer.envatousercontent.com/files/260683618/Previewimage.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=30a6b94a9c27ec72c1bca1ba0bf071fc" : imageUrl} className="card-img-top" alt="..." style={{ width: "100%", height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title">{title.substring(0, 50)}...  </h5>
                            <p className="card-text">{description.substring(0, 200)}.....</p>
                            <p style={{ color: '#ffffff' + '!important' }}><small>By {!author ? "Unknown" : author}</small> </p>
                            <p><small>On {date} at {time}</small></p>
                            <Button variant="contained" endIcon={<ArticleTwoToneIcon />}
                                a rel="noreferrer" href={newsUrl} target="_blank"
                                className={classes.btn}
                            >
                                Read More
                            </Button>
                        </div>
                    </div>
                </div>
            </Typography>
    )

}

export default NewsItem