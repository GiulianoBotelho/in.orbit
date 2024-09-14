import { X } from "lucide-react";
import { DialogClose, DialogContent, DialogDescription, DialogTitle } from "./dialog";
import { Label } from "./label";
import { Input } from "./input";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { RadioGroupIndicator, RadioGroupItem } from "./radio-group";
import { Button } from "./button";

export function CreateGoal(){
    return(
        <DialogContent>
        <div className='flex flex-col gap-6 h-full'>
        <div className='flex flex-col gap-3'>
        <div className='flex items-center justify-between'>
              <DialogTitle>Cadastrar meta</DialogTitle>
              <DialogClose>
                <X className='size-5 text-zinc-600'/>
              </DialogClose>
              </div>
        
              <DialogDescription>
                Adicione as atividades que te fazem bem e que você quer continuar praticando na semana
              </DialogDescription>
        </div>
        <form action="" className='flex-1 flex flex-col justify-between'>
          <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
        <Label htmlFor='title'> Qual a atividade?</Label>
        <Input id='title' autoFocus placeholder='Praticar exercícios, meditar, etc...'/>
        </div>
        <div className='flex flex-col gap-2'>
        <Label htmlFor='title'> Quantas vezes na semana?</Label>
        <RadioGroup>
          <RadioGroupItem value='1'>
            <RadioGroupIndicator/>
          <span className='text-zinc-300 text-sm leading-none'>1x na semana</span>
          <span className='text-lg leading-none'>🥱</span>
          </RadioGroupItem>
          <RadioGroupItem value='1'>
            <RadioGroupIndicator/>
          <span className='text-zinc-300 text-sm leading-none'>2x na semana</span>
          <span className='text-lg leading-none'>🙂</span>
          </RadioGroupItem>
          <RadioGroupItem value='1'>
            <RadioGroupIndicator/>
          <span className='text-zinc-300 text-sm leading-none'>3x na semana</span>
          <span className='text-lg leading-none'>😎</span>
          </RadioGroupItem>
        </RadioGroup>
        </div>
        
          </div>
        
          <div className='flex items-center gap-3'>
           <DialogClose asChild>
           <Button type='button' className='flex-1' variant='secondary'>Fechar</Button>
           </DialogClose>
            <Button className='flex-1' variant='primary'>Salvar</Button>
          </div>
        </form>
        </div>
            </DialogContent>
    )
}