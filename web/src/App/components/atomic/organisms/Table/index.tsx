import Text from '@Components/atomic/atoms/Text';
import { Body, Header, Row, TableComponent } from './styles';

type IActionButtonsProps = {
  icon: string;
  onClick: () => void;
};

type Iprops = {
  actionButtons?: IActionButtonsProps[];
  headerData: string[];
  data: models.BooksSaled[] | models.BooksStoraged[];
};

function Table({ actionButtons, headerData, data }: Iprops) {
  return (
    <TableComponent>
      <Header>
        <Row>
          {headerData.map((header) => (
            <th key={Math.random()}>{header}</th>
          ))}
        </Row>
      </Header>

      <Body>
        {data.map((item) => (
          <Row key={item.id}>
            {Object.entries(item).map(
              ([key, value]) =>
                key !== 'id' && (
                  <td key={key}>
                    <Text size="small" font="regular">
                      {value}
                    </Text>
                  </td>
                ),
            )}

            <td>
              <div className="action-buttoms">
                {actionButtons?.map((buttom) => (
                  <div key={Math.random()} onClick={buttom.onClick}>
                    <img src={buttom.icon} alt="icon" />
                  </div>
                ))}
              </div>
            </td>
          </Row>
        ))}
      </Body>
    </TableComponent>
  );
}

export default Table;
