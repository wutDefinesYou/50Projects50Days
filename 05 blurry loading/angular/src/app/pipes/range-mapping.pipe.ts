import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rangeMapping',
  standalone: true
})
export class RangeMappingPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    if (args.length !== 4) throw new Error('Incorrect number of parameters to the range mapping pipe function.')

    const [start, end, targetStart, targetEnd] = args

    return value * (targetEnd - targetStart) / (end - start) + targetStart
  }

}
