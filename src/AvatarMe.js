import { Avatar, Grid } from '@nextui-org/react';
import MyImage from './asset/me.jpeg'
const AvatarMe = () => (
    <Grid css={{ pt: "250px", pl: "500px" }}>
        <Avatar
            zoomed
            animated
            src={MyImage}
            css={{ size: "$80", }}
            color="success"
            bordered
            squared
        />
    </Grid>

)
export default AvatarMe;