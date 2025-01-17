import {Branch} from '../../../lib/branch';

describe('lib/branch: ', () => {
  describe('Branch(): ', () => {
    it('has metadata field.', () => {
      const pluginInstance = Branch({});

      expect(pluginInstance).toHaveProperty('metadata');
      expect(pluginInstance).toHaveProperty('execute');
      expect(pluginInstance.metadata).toHaveProperty('kind');
      expect(typeof pluginInstance.execute).toBe('function');
    });
  });
});
