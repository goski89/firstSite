import React from 'react';
import Article from '../components/Article'

const articles = [
    {
        id: 1,
        title: 'Tytuł artykułu 1',
        author: 'Jan Nowak',
        text: 'Nostrud excepteur laborum consequat consectetur ex excepteur aliqua do. Excepteur cupidatat occaecat in id ut. Do eu occaecat in cillum elit dolor adipisicing quis aliquip ea dolor. Ullamco mollit minim quis dolore tempor reprehenderit proident sint fugiat eu.'
    },
    {
        id: 2,
        title: 'Tytuł artykułu 2',
        author: 'Jan Nowak',
        text: 'Nostrud excepteur laborum consequat consectetur ex excepteur aliqua do. Excepteur cupidatat occaecat in id ut. Do eu occaecat in cillum elit dolor adipisicing quis aliquip ea dolor. Ullamco mollit minim quis dolore tempor reprehenderit proident sint fugiat eu.'
    },
    {
        id: 3,
        title: 'Tytuł artykułu 3',
        author: 'Jan Nowak',
        text: 'Nostrud excepteur laborum consequat consectetur ex excepteur aliqua do. Excepteur cupidatat occaecat in id ut. Do eu occaecat in cillum elit dolor adipisicing quis aliquip ea dolor. Ullamco mollit minim quis dolore tempor reprehenderit proident sint fugiat eu.'
    },
]

function HomePage(props) {

    const artList=articles.map(article => (
        <Article key={article.id} {...article}/>
    ))
    return (
        <div className="Home">
            {artList}
        </div>
    );
}

export default HomePage;