type QNode<T> = {
    value: T;
    next?: QNode<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = {
            value: item,
        } as QNode<T>;
        this.length++;
        if (!this.tail) {
            // if there's no tail we are creating a new queue basically
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;
        // first update head
        const head = this.head;
        // don't care if it's undefined
        this.head = this.head.next;

        // non GC language you'd free memory at this step
        // in this case it's optional
        head.next = undefined;

        // IMPORTANT since tail will misbehave when we explode a queue
        if (this.length === 0) {
            this.tail = undefined;
        }

        return head.value;
        // then return previous head
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
