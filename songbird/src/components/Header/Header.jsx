import React from 'react';
import './Header.scss';

const Header = (props) => {

    const {level, score} = props;

    const categoriesData = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];

    return (
        <div className="header">
            <div className="header-main">
                <div className="header-main__logo">Song<span>bird</span></div>
                <div className="header-main__score">Score: {score}</div>
            </div>
            <ul className="category-list">
                {categoriesData.map((category, index) =>
                    <li
                        key={category}
                        className={(index === level) ?
                            "category-list__item  category-list__item_active"
                            : "category-list__item"}>
                        {category}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Header;