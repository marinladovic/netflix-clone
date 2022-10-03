import { Product } from '@stripe/firestore-stripe-payments';
import React from 'react';

interface Props {
  products: Product[];
}

function Table({ products }: Props) {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly price</td>
          {products.map((product) => (
            <td key={product.id} className="tableDataFeature">
              &euro;{product.prices[0].unit_amount! / 100}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Video quality</td>
          {products.map((product) => (
            <td key={product.id} className="tableDataFeature">
              {product.metadata.vidioQuality}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
