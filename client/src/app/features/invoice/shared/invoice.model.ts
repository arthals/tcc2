import { Receiver } from './../../receiver/shared/receiver.model';
import { Conveyor } from '../../conveyor/shared/conveyor.model';
import { Emitter } from '../../emitter/shared/emitter.model';

export class Invoice {
    public id: number;
    public entryDate: Date;
    public natureOperation: string;
    public valueFreight: number;
    public conveyor: Conveyor;
    public emitter: Emitter;
    public receiver: Receiver;
}
export class InvoiceDeleteCommand {
    public invoiceIds: number[] = [];

    constructor(products: Invoice[]) {
        this.invoiceIds = products.map((c: Invoice) => c.id);
    }
}
export class InvoiceRegisterCommand {
    public entryDate: Date;
    public natureOperation: string;
    public valueFreight: number;
    public conveyorId: number;
    public emitterId: number;
    public receiverId: number;
    constructor(invoice: Invoice) {
        this.entryDate = invoice.entryDate;
        this.natureOperation = invoice.natureOperation;
        this.valueFreight = invoice.valueFreight;
    }
    public SetEmitter(emitter: Emitter): void {
        this.emitterId = emitter.id;
    }
    public SetConveyor(conveyor: Conveyor): void {
        this.conveyorId = conveyor.id;
    }
    public SetReceiver(receiver: Receiver): void {
        this.receiverId = receiver.id;
    }
}
