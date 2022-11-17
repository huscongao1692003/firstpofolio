import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Popover, Button, Grid, Row, Text, Spacer } from "@nextui-org/react";
import maeLoad from "./subject/mae.png"
import madLoad from "./subject/mad.png"
import masLoad from "./subject/mas.png"
import ceaLoad from "./subject/cea.png"
import csiLoad from "./subject/csi.png"
import prfLoad from "./subject/prf.png"
import wedLoad from "./subject/wedc.png"
import sslLoad from "./subject/ssl.png"
import osgLoad from "./subject/osg.png"
import proLoad from "./subject/pro.png"
import ssg1Load from "./subject/ssg103.png"
import ssg2Load from "./subject/ssg104.png"
import csdLoad from "./subject/csd.png"
import dbiLoad from "./subject/dbi.png"
import jbdLoad from "./subject/jpd.png"
import jpd1Load from "./subject/jpd2.png"
import iotLoad from "./subject/iot.png"
import prjLoad from "./subject/prj.png"
import sweLoad from "./subject/swe.png"
import iteLoad from "./subject/ite.png"
import jpd3Load from "./subject/jpd133.png"
import prnLoad from "./subject/prn.png"
import swpLoad from "./subject/swp.png"
import swrLoad from "./subject/swr.png"
import swtLoad from "./subject/swt.png"
import sybLoad from "./subject/syb.png"
import enwLoad from "./subject/enw.png"
import mln1Load from "./subject/mln.png"
import mln2Load from "./subject/mln2.png"
import prmLoad from "./subject/prm.png"
import swdLoad from "./subject/swd.png"
import { motion } from "framer-motion"
import { Modal, Input, Checkbox } from "@nextui-org/react"
import { Mail } from "./Mail"
import { Password } from "./Password"
const Study = () => {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    const list = [
        {
            title: "MAE101",
            img: maeLoad,
            link: "https://drive.google.com/drive/folders/1e8MJVqFOP8LWmVGjav2hXWatN2xrvSVr"
        },
        {
            title: "CEA201",
            img: ceaLoad,
            link: "",
        },
        {
            title: "CSI104",
            img: csiLoad,
            link: "",
        },
        {
            title: "PRF192",
            img: prfLoad,
            link: "",
        },
        {
            title: "SSL101c",
            img: sslLoad,
            link: "",
        },
        {
            title: "MAD101",
            img: madLoad,
            link: "",
        },
        {
            title: "NWC203c",
            img: wedLoad,
            link: "",
        },
        {
            title: "OSG202",
            img: osgLoad,
            link: "",
        },
        {
            title: "PRO192",
            img: proLoad,
            link: "",
        },
        {
            title: "SSG103",
            img: ssg1Load,
            link: "",
        },
        {
            title: "SSG104",
            img: ssg2Load,
            link: "",
        },
        {
            title: "CSD201",
            img: csdLoad,
            link: "",
        },
        {
            title: "DBI202",
            img: dbiLoad,
            link: "",
        },
        {
            title: "JPD113",
            img: jbdLoad,
            link: "",
        },
        {
            title: "WED201c",
            img: wedLoad,
            link: "",
        },
        {
            title: "IOT102",
            img: iotLoad,
            link: "",
        },
        {
            title: "JPD123",
            img: jpd1Load,
            link: "",
        },
        {
            title: "MAS291",
            img: masLoad,
            link: "",
        },
        {
            title: "PRJ301",
            img: prjLoad,
            link: "",
        },
        {
            title: "SWE201c",
            img: sweLoad,
            link: "",
        },
        {
            title: "ITE302c",
            img: iteLoad,
            link: "",
        },
        {
            title: "JPD133",
            img: jpd3Load,
            link: "",
        },
        {
            title: "PRN211",
            img: prnLoad,
            link: "",
        },
        {
            title: "SWP391",
            img: swpLoad,
            link: "",
        },
        {
            title: "SWR302",
            img: swrLoad,
            link: "",
        },
        {
            title: "SWT301",
            img: swtLoad,
            link: "",
        },
        {
            title: "SYB302c",
            img: sybLoad,
            link: "",
        },
        {
            title: "ENW492c",
            img: enwLoad,
            link: "",
        },
        {
            title: "MLN111",
            img: mln1Load,
            link: "",
        },
        {
            title: "MLN122",
            img: mln2Load,
            link: "",
        },
        {
            title: "PRM392",
            img: prmLoad,
            link: "",
        },
        {
            title: "SWD392",
            img: swdLoad,
            link: "",
        },

    ];

    return (
        <>
            <Spacer y={5} />
            <Text h1 animate={{ fontSize: 50 }}
                size={60}
                css={{
                    textAlign: "center",
                    textGradient: "45deg, $purple600 -20%, $pink600 100%",
                }}
                weight="bold">Documents For FPTU Student</Text>
            <Spacer y={3} />
            <Grid.Container gap={8} justify="flex-start">
                {list.map((item, index) => (
                    <Grid xs={6} sm={3} key={index}>
                        <Card isPressable isHoverable variant='shadow' >
                            <Card.Body css={{ p: 0 }}>
                                <Card.Image
                                    onClick={() => window.open(item.link, "_blank")}
                                    src={item.img}
                                    objectFit="cover"
                                    width="100%"
                                    height={180}
                                    alt={item.title}
                                />
                            </Card.Body>
                            <Card.Footer css={{ justifyItems: "flex-start", pl: "20px" }}>
                                <Row wrap="no-wrap" justify="space-around" align="center">
                                    <Text b css={{ pr: "60px" }}>{item.title}</Text>
                                    <div>
                                        <Button auto shadow onClick={handler}>
                                            CHAT
                                        </Button>

                                    </div>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>

                ))}
            </Grid.Container>
            <Spacer y={10} />

        </>
    );
}
export default Study;