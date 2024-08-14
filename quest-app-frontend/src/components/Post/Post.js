import React, {useState, useEffect} from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CommentIcon from '@mui/icons-material/Comment';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    }),
}));

function Post(props) {
    const {title, text} = props;
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div className="postContainer">
            <Card sx={{ width: 550, height: 300 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{  bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                    }
                    title={<Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold', textAlign:"left" }}>
                                    {title}
                            </Typography>
                            }
                />
                <CardContent>
                    <Typography  sx={{ textAlign:"center" }} variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <CommentIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            This is the expanded content. You can add any content here that you want to display when the card is expanded.
                        </Typography>
                        <Typography paragraph>
                            You could include more details, additional text, images, or anything else you want to reveal upon expansion.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
}

export default Post;