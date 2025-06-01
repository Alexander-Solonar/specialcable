import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SpriteIcon from 'components/common/SpriteIcon';
import { Context } from 'context/Context';
import { useTranslation } from 'react-i18next';

const ProductBreadcrumbs = () => {
  const { productList } = useContext(Context);
  const { i18n, t } = useTranslation();
  const { catalogId } = useParams();
  const [catalogTitle, setCatalogTitle] = useState('');
  const lng = i18n.resolvedLanguage;

  useEffect(() => {
    setCatalogTitle(productList.find(({ path }) => path === catalogId)?.title[lng] || '');
  }, [catalogId, lng, productList]);

  return (
    <div className="mb-8 flex items-center gap-x-5 text-base text-soft-blue">
      <Link to="/catalog">{t('breadcrumbs.catalog')}</Link>
      <SpriteIcon
        icon="icon-next"
        className="h-[15px] w-[6px] fill-soft-blue transition-colors duration-300 group-hover:fill-vivid-orange"
      />
      <Link to={`/catalog/${catalogId}`}>{catalogTitle}</Link>
    </div>
  );
};

export default ProductBreadcrumbs;
