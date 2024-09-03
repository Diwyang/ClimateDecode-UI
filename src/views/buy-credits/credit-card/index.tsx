import React from 'react';
import './credit-card.scss';
import Image from '../../../assets/Rectangle.png';
import { Button } from 'antd';

interface IProps {
  heading: string;
  content: string;
  perTonneTxt: string;
  inputLabel: string;
  btnCta: string;
}

const CreditCard: React.FC<IProps> = ({
  heading,
  content,
  perTonneTxt,
  inputLabel,
  btnCta,
}) => {
  return (
    <div className="credit-card">
      <div className="credit-card__heading-wraper">
        <h1 className="credit-card__heading">{heading}</h1>
        <p className="credit-card__content">{content}</p>
      </div>
      <div className="credit-card__inputWrapper">
        <div className="credit-card__perTonneWrapper">
          <div>{perTonneTxt}</div>
          <div className="price">11:00 EUR</div>
        </div>
        <div className="credit-card__perTonneWrapper">
          <div>
            <input type="number" placeholder={inputLabel} />
          </div>
          <div className="price">11:00 EUR</div>
        </div>
        <Button type="primary" size="large" block>
          {btnCta}
        </Button>
      </div>
      <div>
        <img className="credit-card__image" src={Image} />
      </div>
    </div>
  );
};

export default CreditCard;
