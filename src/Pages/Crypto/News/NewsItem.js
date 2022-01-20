
import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import { makeStyles } from '@mui/styles';
import { blue, deepPurple } from '@mui/material/colors';

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
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <Typography paragraph>
            <div className="my-3">
                <div className="card"
                    style={{
                        // backgroundColor : '#4B0082',
                        // backgroundColor : '#4B0082',
                        backgroundImage: "linear-gradient(#ad5389,#3c1053)",
                        color: '#ffffff',
                        // boxShadow : '5px 5px 5px #e973cb'
                        // background: '#2980B9',
                        //   background: linearGradient(
                        //     '0deg,
                        //     #005AA7 0%,
                        //     #FFFDE4 100%'
                        //   )
                        // height: '540px',
                        // width: '400px',
                        // opacity: '100%',
                        // minWidth: '250px',
                        // padding: '1.5rem',
                        // borderRadius: '16px',
                        // background: 'rgb(218, 138, 138)',
                        // boxShadow: '-1rem 0 3rem #e973cb',
                        // display: 'flex',
                        // flexDirection: 'column',
                        // alignItems: 'center',
                        // justifyContent: 'flex-end',
                        // transition: '.2s',
                        // margin: 0,
                        // scrollSnapAlign: 'start',
                        // clear: 'both',
                        // position: 'relative',

                    }}
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0',

                    }
                    }>
                        <span className="badge badge-pill bg-danger"> {source} </span>
                    </div>

                    {/* <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." /> */}
                    <img src={!imageUrl ? "https://videohive.img.customer.envatousercontent.com/files/260683618/Previewimage.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=30a6b94a9c27ec72c1bca1ba0bf071fc" : imageUrl} className="card-img-top" alt="..." style={{ width: "100%", height: "200px" }} />
                    <div className="card-body">
                        {/* <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p> */}
                        <h5 className="card-title">{title.substring(0, 50)}...  </h5>
                        <p className="card-text">{description.substring(0, 200)}.....</p>
                        <p style={{ color: '#ffffff' + '!important' }}><small>By {!author ? "Unknown" : author}</small> </p>
                        <p><small>On  {new Date(date).toGMTString()}</small></p>
                        {/* <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a> */}
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
