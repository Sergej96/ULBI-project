import React, { FC } from 'react';
import { ArticleView } from 'entities/Article';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TitledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';

type ArticleViewSelectorProps = {
  activeView?: ArticleView
  className?: string
  onViewClick: (newView: ArticleView) => void
}

type ViewType = {
  icon: React.VFC<React.SVGProps<SVGSVGElement>>
  view: ArticleView
}

const viewsList: ViewType[] = [{
  icon: ListIcon,
  view: ArticleView.LIST,
},
{
  icon: TitledIcon,
  view: ArticleView.GRID,
}];
export const ArticleViewSelector: FC<ArticleViewSelectorProps> = ({ className, activeView, onViewClick }) => {
  const onClick = (newView: ArticleView) => () => onViewClick(newView);

  return (
      <div className={classNames(cls.articleViewSelector, {}, [className])}>
          {
      viewsList.map((viewItem, index) => (
          <Button
              key={index}
              theme={ButtonTheme.CLEAR}
              className={classNames('', { [cls.noActive]: viewItem.view !== activeView })}
              onClick={onClick(viewItem.view)}
          >
              <Icon Svg={viewItem.icon} />
          </Button>))
    }
      </div>
  );
};
