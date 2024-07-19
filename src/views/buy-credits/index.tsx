import React from 'react';
import LayoutPage from '../layout/Layout';
import CreditCard from './credit-card';
import { Col, Row, Card } from 'antd';

type UserType = {
    key: string;
    heading: string;
    content: string;
    perTonneTxt: string;
    inputLabel: string;
    btnCta: string;
};

const items: Array<UserType> = [
    {
        key: 'bc1',
        heading: 'Za Hung Hydropower',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        perTonneTxt: 'per tonne CO2e',
        inputLabel: 'tonne CO2e',
        btnCta: 'Add to Cart',
    },
    {
        key: 'bc2',
        heading: 'Za Hung Hydropower',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        perTonneTxt: 'per tonne CO2e',
        inputLabel: 'tonne CO2e',
        btnCta: 'Add to Cart',
    },
    {
        key: 'bc3',
        heading: 'Za Hung Hydropower',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        perTonneTxt: 'per tonne CO2e',
        inputLabel: 'tonne CO2e',
        btnCta: 'Add to Cart',
    },
    {
        key: 'bc4',
        heading: 'Za Hung Hydropower',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        perTonneTxt: 'per tonne CO2e',
        inputLabel: 'tonne CO2e',
        btnCta: 'Add to Cart',
    },
    {
        key: 'bc5',
        heading: 'Za Hung Hydropower',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        perTonneTxt: 'per tonne CO2e',
        inputLabel: 'tonne CO2e',
        btnCta: 'Add to Cart',
    },
    {
        key: 'bc6',
        heading: 'Za Hung Hydropower',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        perTonneTxt: 'per tonne CO2e',
        inputLabel: 'tonne CO2e',
        btnCta: 'Add to Cart',
    },
    {
        key: 'bc7',
        heading: 'Za Hung Hydropower',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        perTonneTxt: 'per tonne CO2e',
        inputLabel: 'tonne CO2e',
        btnCta: 'Add to Cart',
    },
];

const BuyCredits: React.FC = () => {
    return (
        <LayoutPage>
            <Card>
            <h1>BUY CREDITS</h1>
            <Row gutter={16}>
                {items.map((item: UserType) => (
                    <Col span={24}>
                        <CreditCard
                            key={item.key}
                            heading={item.heading}
                            content={item.content}
                            perTonneTxt={item.perTonneTxt}
                            inputLabel={item.inputLabel}
                            btnCta={item.btnCta}
                        />
                    </Col>
                ))}
            </Row>
            </Card>
        </LayoutPage>
    );
};

export default BuyCredits;
