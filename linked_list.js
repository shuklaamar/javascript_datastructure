class block{
    constructor(data,next=null){
        this.val=data;
        this.next=next;
    }
}

class linkedlist{
    constructor(){
        this.head=null;
        this.size = 0;
    }
    add_at_end(data){
        let node = new block(data);
        if(this.head==null){
            this.head=node;
        } 
        else{
            this.current = head;
            while(this.current.next){
                this.current=this.current.next;
            }
        }
        this.size++;
    }
    add_at_index(element,index){
        if(index>0 && index>this.size) return false;
        else{
            let node = new block(element);
            let cur,pre;
            cur=this.head;
            if(index==0){
                pre=this.head;
                this.head=node;
            }
            else{
                cur=this.head;
                let ind=0;
                while(ind < index){
                    pre=cur;
                    cur=cu.next;
                }
                node.next=cur;
                pre.next=node;
            }
            this.size++;
        }
    }
    add_at_front(element){
        let node = new block(element);
        if(this.head==null){
            this.head=node;
        }
        else{
            this.temp=head;
            head=node;
            this.head=this.temp;
        }
        this.size++;
    }
    remove_at_index(index){
        if(index>0 && index>this.size){
            return -1;
        }
        else{
            let cur,pre,it=0;
            cur=this.head;
            pre=cur;
            if(index == 0){
                this.head=this.head.next;
            }
            else{
                while(it < index){
                    pre=cur;
                    cur=cur.next;
                }
                pre.next=cur.next;
            }
            this.size--;
        }
    }
    remove_element(element){
        let cur = this.head;
        let pre = null;
        while(cur != null){
            if(cur.val === element){
                if(pre === null)
                {
                    this.head=this.head.next;
                }
                else{
                    pre.next = cur.next;
                }
                this.size--;
            }
            pre = cur;
            cur=cur.next;
        }
    }
}
