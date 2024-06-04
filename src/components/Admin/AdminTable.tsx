//@ts-nocheck
//TODO: REMOVE NO CHECK FOR FINAL BUILD
import {
  Table,
  TableBody,
  Button,
  Input,
  Pagination,
  TableCell,
  TableRow,
  getKeyValue,
  TableColumn,
  TableHeader,
  ButtonGroup,
} from "@nextui-org/react";
import { useState } from "react";

interface AdminTableProps {
  type: string;
  rows: unknown[];
  columns?: unknown[];
}

const AdminTable = ({ type, rows, columns }: AdminTableProps) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const topContent = (
    <div className="flex justify-between w-full">
      <Button color="primary" size="small">
        Add new user
      </Button>
      <Input placeholder="Search..." size="small" width="200px" />
    </div>
  );

  const bottomContent = (
    <div className="flex justify-between w-full">
      <ButtonGroup>
        <Button
          color="secondary"
          size="sm"
          variant="flat"
          isDisabled={selectedRows.length === 0}
        >
          Delete selected
        </Button>
        <Button
          color="danger"
          size="sm"
          variant="flat"
          isDisabled={selectedRows.length === 0}
        >
          Ban selected
        </Button>
      </ButtonGroup>

      <Pagination
        total={100}
        size="sm"
        onChange={(page) => console.log(page)}
      />
    </div>
  );

  return (
    <>
      <Table
        aria-label="Example table with custom cells, pagination and sorting"
        isHeaderSticky
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        classNames={{
          wrapper: "max-h-[382px]",
        }}
        selectionMode="multiple"
        topContent={topContent}
        topContentPlacement="outside"
      >
        <TableHeader columns={columns}>
          {(column: any) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>

        <TableBody emptyContent="No data found" items={rows}>
          {(item) => (
            <TableRow
              key={item.key}
              onClick={() =>
                selectedRows.includes(item.key)
                  ? setSelectedRows(
                      selectedRows.filter((key) => key !== item.key)
                    )
                  : setSelectedRows([...selectedRows, item.key])
              }
            >
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)} </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      {type}
    </>
  );
};

export default AdminTable;
