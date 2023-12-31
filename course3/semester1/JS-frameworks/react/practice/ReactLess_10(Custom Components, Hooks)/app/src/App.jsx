import { Counter } from "./components/Counter/Counter";
import { Button } from "./components/ui/Button/Button";
import { Input } from "./components/ui/Input/Input";

export function App() {
  return (
    <div>
      <Button
        title={'Apply Now'}
        theme={'black'}
        onClick={() => console.log('Search')}
      />
      <Button
        title={"Apply Now - It's Free"}
        theme={'green'}
        onDoubleClick={() => console.log('Auth')}
      />
      <Button
        title={"Sign-Up Using Google"}
        theme={'white'}
        onDoubleClick={() => console.log('Auth')}
      />
      <div>
        <Input size={'xl'} />
        <Input size={'l'} />
        <Input size={'s'} />
      </div>
      <div>
        <Input
          size={'xl'}
          type={'number'}
        />
        <Input
          size={'l'}
          type={'date'}
        />
        <Input
          size={'xl'}
          type={'password'}
        />
      </div>
      <Counter />
    </div>
  )
}