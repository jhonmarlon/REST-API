export class CreateTodoDto {
    private constructor(
        public readonly text: string
    ){}

    static create(props: {[key: string]: any} ): [ string?, CreateTodoDto? ] {

        const { text } = props;

        if(!text) return ['text property is required', undefined];
        if(typeof text !== 'string') return ['text property should be a string', undefined];

        return [undefined, new CreateTodoDto(text)];
    }
}