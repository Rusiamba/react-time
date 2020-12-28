import React, {useState} from 'react';

const DateTimePretty = (Component) => {
    return class extends React.Component{
        render() {
            const nowDate = new Date();
            let newDate;
            const range = nowDate - new Date(this.props.date);
            console.log(new Date(this.props.date), range)
            if(range < (3600 * 1000)){
               newDate = `${Math.ceil(range / (60 * 1000))} минут назад`;
            } else if(range < (3600 * 1000 * 24)){
                newDate = `${Math.ceil(range / (60 * 60 * 1000))} часов назад`;
            } else {
                newDate = `${Math.ceil(range / (60 * 60 * 1000 * 24))} дней назад`;
            }
            return <Component date={newDate}/>;
        }
    }
}

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

const ContainerDate = DateTimePretty(DateTime)
function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <ContainerDate date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2020-12-25 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2020-12-25 16:50:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}
